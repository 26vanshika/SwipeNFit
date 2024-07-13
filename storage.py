from flask import Flask, request, jsonify
import csv


app = Flask(__name__)

CSV_FILE = '/Users/vanshya/Desktop/myntra/SwipeNFit/database/Fashion Dataset v2.csv'

DATASTORINGCSVFILE = '/Users/vanshya/Desktop/myntra/SwipeNFit/storage/storing.csv'

user_swipe_counts = {}

def get_most_rated_outfit():
    with open(CSV_FILE, 'r') as file:
        reader = csv.DictReader(file)
        highest_rated_outfit = None
        highest_rating = -1

        for row in reader:
            avg_rating = float(row['avg_rating'])
            if avg_rating > highest_rating: 
                highest_rating = avg_rating
                highest_rated_outfit = row 
                return highest_rated_outfit



@app.route('/api/swipe', methods=['POST'])
def record_swipe():
    data = request.json
    user_id = data.get('user_id')
    action= data.get('action')
    outfit_id = data.get('outfit_id')

    if user_id and action and outfit_id:

        with open(DATASTORINGCSVFILE, 'a', newline='') as file:
            fieldnames = ['user_id','action', 'outfit_id']
            writer = csv.DictWriter(file, fieldnames=fieldnames)

            if file.tell() == 0:
                writer.writeheader()

            writer.writerow({'user_id':user_id, 'action': action, 'outfit_id': outfit_id})
        

        if action == 'left' and user_swipe_counts[user_id]['left'] >= 5:
            most_rated_outfit = get_most_rated_outfit()
            user_swipe_counts[user_id]['left'] = 0
        

        return jsonify({"message": "Swipe recorded successfully"}), 200
    
    else:
        return jsonify({"error": "Missing required parameters"}), 400
    

    if __name__ == '__main__':
        app.run(debug=True)

