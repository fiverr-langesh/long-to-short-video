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

@app.post("/autocrop")
def autocrop(request: RequestModel):
    return autocropper(request.url, request.user_id)