import pickle
import numpy as np
import pandas as pd

# Load the features and filenames
feature_list = pickle.load(open('embeddings.pkl', 'rb'))
filenames = pickle.load(open('filenames.pkl', 'rb'))

# Load the CSV file containing the images to be excluded
storage_csv_path = 'storing.csv' 
excluded_images = pd.read_csv(storage_csv_path, usecols=[2]).iloc[:, 0].tolist()

# Function to compute cosine similarity
def compute_similarity(query_features, features):
    similarity = np.dot(query_features, features) / (np.linalg.norm(query_features) * np.linalg.norm(features))
    return similarity

# Function to find top N similar images
def find_similar_images(query_image_filename, feature_list, filenames, excluded_images, top_n=5):
    query_index = filenames.index(query_image_filename)
    
    # Get the features of the query image
    query_features = feature_list[query_index]
    
    # Compute similarities for all images
    similarities = []
    for features in feature_list:
        similarity = compute_similarity(query_features, features)
        similarities.append(similarity)
    
    # Sort by similarity (descending order)
    sorted_indices = np.argsort(similarities)[::-1]
    
    # Get the top N similar images, excluding those that are swiped
    top_n_images = []
    count = 0
    for i in range(1, len(sorted_indices)):
        if count >= top_n:
            break
        idx = sorted_indices[i]
        if filenames[idx] not in excluded_images:
            top_n_images.append(filenames[idx])
            count += 1
    
    return top_n_images

# Example usage:
query_image_filename = '2322792.jpg'
recommended_images = find_similar_images(query_image_filename, feature_list, filenames, excluded_images, top_n=5)

