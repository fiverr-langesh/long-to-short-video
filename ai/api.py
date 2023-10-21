import fastapi
from autocropper import main as autocropper
from pydantic import BaseModel

app = fastapi.FastAPI()

@app.get("/")
def root():
    return {"message": "Hello World"}

class RequestModel(BaseModel):
    url: str
    user_id: str

@app.post("/ai")
def autocrop(request: RequestModel):
    return autocropper(request.url, request.user_id)

# expose static files inside uploads folder
import os
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
app.mount("/uploads", StaticFiles(directory=os.path.join(os.getcwd(), "uploads")), name="uploads")

