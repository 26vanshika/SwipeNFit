import pickle
import numpy as np

# Load the features and filenames
feature_list = pickle.load(open('embeddings.pkl', 'rb'))
filenames = pickle.load(open('filenames.pkl', 'rb'))

#feature_list = [feature for feature in feature_list if feature is not None]
#filenames = [filenames[i] for i in range(len(filenames)) if feature_list[i] is not None]

# Function to compute cosine similarity
def compute_similarity(query_features, features):
    similarity = np.dot(query_features, features) / (np.linalg.norm(query_features) * np.linalg.norm(features))
    return similarity

# Function to find top N similar images
def find_similar_images(query_image_filename, feature_list, filenames, top_n=5):
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
    
    # Get the top N similar images
    top_n_images = []
    for i in range(1, top_n + 1):  # Start from 1 to exclude the query image itself
        idx = sorted_indices[i]
        top_n_images.append(filenames[idx])
    
    return top_n_images

# Example usage:
query_image_filename = '2322792.jpg'
recommended_images = find_similar_images(query_image_filename, feature_list, filenames, top_n=5)

# Can put in a list or something
print(f"Top {len(recommended_images)} recommended images:")
for img in recommended_images:
    print("Filename:", img)
