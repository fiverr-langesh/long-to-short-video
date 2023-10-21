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
    autocropper(request.url, request.user_id)

    output_urls = []
    for i in range(0, 3):
        output_urls.append(f"http://localhost:5000/uploads/{request.user_id}/outputs/output00{i}.mp4")

    return {"output_urls": output_urls}

# expose static files inside uploads folder
import os
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
app.mount("/uploads", StaticFiles(directory=os.path.join(os.getcwd(), "uploads")), name="uploads")

