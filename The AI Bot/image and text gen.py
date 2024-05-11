#importing necessary libraries
from diffusers import DiffusionPipeline
import torch
import matplotlib.pyplot as plt
import pathlib
import textwrap
import google.generativeai as genai
from google.colab import userdata
from IPython.display import display
from IPython.display import Markdown

def to_markdown(text):
    text = text.replace('•', '  *')
    return Markdown(textwrap.indent(text, ">", predicate=lambda _: True))

google_api_key = 'THE API KEY HERE'
genai.configure(api_key=google_api_key)

import os
os.environ[google_api_key] = 'THE API KEY HERE'

model = genai.GenerativeModel('models/gemini-1.0-pro-latest')

def is_topic_specific(response):
    keywords = ["animal cell", "plant cell","chemical bonds","photosynthesis","covalent bond","solar system","earth","science","motherboard",'mitochondria',
                "cell wall",'cellulose','technology','cell organelles','biology']
    response_text = response.text.lower()
    for keyword in keywords:
        if keyword in response_text:
            return True
    return False

def get_gemini_response(user_input):
    response = model.generate_content(user_input)
    if is_topic_specific(response):
        return response.text
    else:
        return "I'm sorry! Why not talk about the things you just studied right now!"

# Diffusion Pipeline for image generation
pipe = DiffusionPipeline.from_pretrained("stabilityai/stable-diffusion-xl-base-1.0", torch_dtype=torch.float16, use_safetensors=True, variant="fp16")
pipe.to("cuda")

while True:
    user_input = input("Ask your question (type 'exit' to quit): ")
    if user_input.lower() == 'exit':
        break

    if 'generate' in user_input.lower() or 'show' in user_input.lower() or 'image' in user_input.lower():
        prompt = input("Can you please repeat that?: ")
        if prompt == 'exit':
            break

        images = pipe(prompt=prompt).images[0]
        images.save("modelthird.png")

        # Load the image with matplotlib and resize
        img = plt.imread("modelthird.png")
        plt.imshow(img, aspect='auto')
        plt.axis('off')
        plt.show()
    else:
        response_text = get_gemini_response(user_input + "answer the question within 100 words")
        display(to_markdown(response_text))
