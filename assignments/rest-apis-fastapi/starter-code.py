from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Optional, List

# Initialize FastAPI app
app = FastAPI(title="Item Management API", version="1.0.0")

# Define data model using Pydantic
class Item(BaseModel):
    id: Optional[int] = None
    name: str
    description: str
    category: str
    price: float

# In-memory storage (replace with database in production)
items_db: List[Item] = []
next_id = 1

# TODO: Implement GET /items - retrieve all items
@app.get("/items")
async def get_items():
    """Retrieve all items from the collection."""
    pass

# TODO: Implement POST /items - create a new item
@app.post("/items", status_code=201)
async def create_item(item: Item):
    """Create a new item and add it to the collection."""
    pass

# TODO: Implement GET /items/{item_id} - retrieve a specific item
@app.get("/items/{item_id}")
async def get_item(item_id: int):
    """Retrieve a specific item by ID."""
    pass

# TODO: Implement PUT /items/{item_id} - update an existing item
@app.put("/items/{item_id}")
async def update_item(item_id: int, item: Item):
    """Update an existing item."""
    pass

# TODO: Implement DELETE /items/{item_id} - delete an item
@app.delete("/items/{item_id}")
async def delete_item(item_id: int):
    """Delete an item from the collection."""
    pass

# Optional: Implement filtering
# TODO: Add query parameters to GET /items for filtering by category and searching by name

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
