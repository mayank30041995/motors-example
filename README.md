# motors-example

<!-- User API Response -->
[
    {
        "id": 1,
        "firstName": "mayank",
        "lastName": "sharma",
        "wheelId": 1,
        "createdAt": "2024-05-08T10:59:08.000Z",
        "updatedAt": "2024-05-08T10:59:08.000Z",
        "WheelId": 1,
        "Wheel": {
            "id": 1,
            "name": "bike",
            "numberOfWheels": 2,
            "createdAt": "2024-05-08T09:50:04.000Z",
            "updatedAt": "2024-05-08T09:50:04.000Z"
        }
    },
    {
        "id": 3,
        "firstName": "rohit",
        "lastName": "sharma",
        "wheelId": 2,
        "createdAt": "2024-05-08T11:15:38.000Z",
        "updatedAt": "2024-05-08T11:15:38.000Z",
        "WheelId": 2,
        "Wheel": {
            "id": 2,
            "name": "car",
            "numberOfWheels": 4,
            "createdAt": "2024-05-08T09:50:26.000Z",
            "updatedAt": "2024-05-08T09:50:26.000Z"
        }
    },
    {
        "id": 4,
        "firstName": "harry",
        "lastName": "potter",
        "wheelId": 1,
        "createdAt": "2024-05-08T11:54:45.000Z",
        "updatedAt": "2024-05-08T11:54:45.000Z",
        "WheelId": 1,
        "Wheel": {
            "id": 1,
            "name": "bike",
            "numberOfWheels": 2,
            "createdAt": "2024-05-08T09:50:04.000Z",
            "updatedAt": "2024-05-08T09:50:04.000Z"
        }
    }
]


<!-- Category API Response -->


[
    {
        "id": 1,
        "name": "cruiser",
        "wheelId": 1,
        "createdAt": "2024-05-08T09:51:42.000Z",
        "updatedAt": "2024-05-08T09:51:42.000Z",
        "WheelId": 1
    },
    {
        "id": 2,
        "name": "sports",
        "wheelId": 1,
        "createdAt": "2024-05-08T09:52:05.000Z",
        "updatedAt": "2024-05-08T09:52:05.000Z",
        "WheelId": 1
    },
    {
        "id": 3,
        "name": "hatchback",
        "wheelId": 2,
        "createdAt": "2024-05-08T09:52:20.000Z",
        "updatedAt": "2024-05-08T09:52:20.000Z",
        "WheelId": 2
    },
    {
        "id": 4,
        "name": "suv",
        "wheelId": 2,
        "createdAt": "2024-05-08T09:52:32.000Z",
        "updatedAt": "2024-05-08T09:52:32.000Z",
        "WheelId": 2
    },
    {
        "id": 5,
        "name": "sedan",
        "wheelId": 2,
        "createdAt": "2024-05-08T09:52:43.000Z",
        "updatedAt": "2024-05-08T09:52:43.000Z",
        "WheelId": 2
    }
]

<!-- Wheel API Response -->


[
    {
        "id": 1,
        "name": "bike",
        "numberOfWheels": 2,
        "createdAt": "2024-05-08T09:50:04.000Z",
        "updatedAt": "2024-05-08T09:50:04.000Z",
        "Categories": [
            {
                "id": 1,
                "name": "cruiser",
                "wheelId": 1,
                "createdAt": "2024-05-08T09:51:42.000Z",
                "updatedAt": "2024-05-08T09:51:42.000Z",
                "WheelId": 1
            },
            {
                "id": 2,
                "name": "sports",
                "wheelId": 1,
                "createdAt": "2024-05-08T09:52:05.000Z",
                "updatedAt": "2024-05-08T09:52:05.000Z",
                "WheelId": 1
            }
        ]
    },
    {
        "id": 2,
        "name": "car",
        "numberOfWheels": 4,
        "createdAt": "2024-05-08T09:50:26.000Z",
        "updatedAt": "2024-05-08T09:50:26.000Z",
        "Categories": [
            {
                "id": 3,
                "name": "hatchback",
                "wheelId": 2,
                "createdAt": "2024-05-08T09:52:20.000Z",
                "updatedAt": "2024-05-08T09:52:20.000Z",
                "WheelId": 2
            },
            {
                "id": 4,
                "name": "suv",
                "wheelId": 2,
                "createdAt": "2024-05-08T09:52:32.000Z",
                "updatedAt": "2024-05-08T09:52:32.000Z",
                "WheelId": 2
            },
            {
                "id": 5,
                "name": "sedan",
                "wheelId": 2,
                "createdAt": "2024-05-08T09:52:43.000Z",
                "updatedAt": "2024-05-08T09:52:43.000Z",
                "WheelId": 2
            }
        ]
    }
]