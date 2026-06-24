import tensorflow as tf
import numpy as np
from PIL import Image

model = tf.keras.models.load_model("model/plant_model.keras")

class_names = [
    "Pepper_Bacterial_Spot",
    "Pepper_Healthy",
    "Potato_Early_Blight",
    "Potato_Healthy",
    "Potato_Late_Blight",
    "Tomato_Target_Spot",
    "Tomato_Mosaic_Virus",
    "Tomato_Yellow_Leaf_Curl_Virus",
    "Tomato_Bacterial_Spot",
    "Tomato_Early_Blight",
    "Tomato_Healthy",
    "Tomato_Late_Blight",
    "Tomato_Leaf_Mold"
]

def predict_image(image_path):
    img = Image.open(image_path).convert("RGB")
    img = img.resize((224,224))

    img_array = np.array(img)
    img_array = np.expand_dims(img_array, axis=0)
    img_array = img_array / 255.0

    prediction = model.predict(img_array)

    predicted_class = class_names[np.argmax(prediction)]
    confidence = float(np.max(prediction) * 100)

    return {
        "disease": predicted_class,
        "confidence": round(confidence, 2)
    }