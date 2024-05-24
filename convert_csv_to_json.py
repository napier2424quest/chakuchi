import csv
import json

csv_file_path = 'combinations_with_scores.csv'
json_file_path = 'json/combinations.json'

# CSVを読み込み
with open(csv_file_path, newline='', encoding='shift-jis') as csvfile:
    reader = csv.DictReader(csvfile)
    rows = list(reader)

# JSONとして保存
with open(json_file_path, 'w', encoding='utf-8') as jsonfile:
    json.dump(rows, jsonfile, ensure_ascii=False, indent=4)