const express = require('express');
const router = express.Router();

const tasks = [
    {
        id: 1,
        task: "Preparar la clase de Nuclio",
        dueDate: "2023/04/20 18:30:00",
        status: "PENDING",
        createdAt: "2023/04/15 18:30:00",
        modifiedAt: null,
        deletedAt: null,
    },
    {
        id: 2,
        task: "Preparar las maletas",
        dueDate: "2023/07/20"
    },
    {
        id: 3,
        task: "Celebrar fin de año",
        dueDate: "2023/12/31"
    },
    {
        id: 4,
        task: "Celebrar la navidad",
        dueDate: "2023/12/25"
    }
]

router.get('/', (req, res) => {
    res.send(tasks)
  })

module.exports = router