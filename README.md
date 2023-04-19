# API ToDo APP

## GET /tasks/:id?
query params:
- datemin
- datemax
- search
- status: "COMPLETED", "IN PROGRESS", "PENDING", "POSTPONED", "DELETED"

404 `{msg: "No se han encontrado tareas"}`

200 
```
    [
    {
        id: ...,
        task: ...,
        dueDate: ...,
        status: ...,
        createdAt: ...,
        modifiedAt: ...,
        deletedAt: ...,
    }, ...
    ]
```

## POST /tasks/
body:
```
    {
        task: ...,
        dueDate: ...,
    }
```

400 `{msg: "task exist"}`

200 
```
    {
        id: ...,
        task: ...,
        dueDate: ...,
        status: ...,
        createdAt: ...,
        modifiedAt: ...,
        deletedAt: ...,
    }
```

## DELETE /tasks/:id?

404 `{msg: "task not exist"}`

200 `{msg: "ok"}`

## PUT (o PATCH) /tasks/:id?
body: 
```
    {
        task: ...,
        dueDate: ...,
        status: ...,
    }
```

404 `{msg: "task not exist"}`

200 
```
    {
        id: ...,
        task: ...,
        dueDate: ...,
        status: ...,
        createdAt: ...,
        modifiedAt: ...,
        deletedAt: ...,
    }
```



