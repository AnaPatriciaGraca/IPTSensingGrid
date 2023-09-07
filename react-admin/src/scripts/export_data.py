import openpyxl
import json
import codecs
import re

# Define the path to your Excel file
excel_file_path = 'LEI_1s_20212022.xlsx'

# Create a dictionary to store the data
data_dict = {}

# Open the Excel file with the appropriate encoding
wb = openpyxl.load_workbook(excel_file_path, read_only=True, data_only=True)

# Define a function to clean sheet names by removing special characters
def clean_sheet_name(sheet_name):
    # Use regular expression to remove special characters except for spaces
    return re.sub(r'[^\w\s]', '', sheet_name)

# Loop through all sheets in the Excel file
for sheet_name in wb.sheetnames:
    # Clean the sheet name to remove special characters
    cleaned_sheet_name = clean_sheet_name(sheet_name)

    # Create a dictionary to store schedules for each day
    schedules_by_day = {
        'Segunda': [],
        'Terça': [],
        'Quarta': [],
        'Quinta': [],
        'Sexta': [],
        'Sábado': [],
    }

    # Select the sheet by name
    sheet = wb[sheet_name]

    # Iterate through columns to extract data by day
    for day in ['C', 'D', 'E', 'F', 'G', 'H', 'I']:
        schedules = []
        for row_index in range(3, 35):  # Rows 3 to 34 for schedules
            cell_value = sheet[f'{day}{row_index}'].value
            if cell_value is not None:
                # Encode cell value as UTF-8 to handle special characters
                schedules.append(cell_value.encode('utf-8').decode('utf-8'))
            else:
                schedules.append("")  # Set empty string for None values
        schedules_by_day[day] = schedules

    # Store schedules by day for this sheet in the dictionary
    data_dict[cleaned_sheet_name] = schedules_by_day

# Close the Excel file
wb.close()

# Save the extracted data as a JSON file with UTF-8 encoding
with codecs.open('db.json', 'w', 'utf-8') as json_file:
    json.dump(data_dict, json_file, ensure_ascii=False, indent=4)

print("Data extraction complete. JSON file saved as 'extracted_data.json'")
