# Use an official Python runtime as a parent image
FROM python:3

RUN apt-get update && apt-get install -y build-essential

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages specified in requirements.txt
RUN pip install -r requirements.txt

# Expose port 5000 for the FastAPI app
EXPOSE 5000

# Run app.py when the container launches
CMD ["uvicorn", "main:app", "--port", "5000"]
