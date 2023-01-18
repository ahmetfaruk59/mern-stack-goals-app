
# Mern Stack Goals App

With this application created for personal planning, you can note the activity you plan to do and organize them. The desired activity can be noted in the section reserved for each user. 

Multi-user personal plan application. NodeJs, ExpressJs,MongoDB were used in Backend, React was used in Frontend. Redux toolkit and redux async thunk were used as state management.
JWT is also used in project to protect the routes and clearify the goal's owner for CRUD procceses.

## Secreenshots
Login From
![Login](https://res.cloudinary.com/dhyig7mwd/image/upload/v1674036405/login_tcvjzi.jpg)

Register Form - Error Message
![Register](https://res.cloudinary.com/dhyig7mwd/image/upload/v1674036200/register_mn8ql4.jpg)

  
Dashboard - None Goal
![Register](https://res.cloudinary.com/dhyig7mwd/image/upload/v1674036200/secreen1_mlvu7s.jpg)

  
Register Form - Error Message
![Register](https://res.cloudinary.com/dhyig7mwd/image/upload/v1674036200/secreen2_kn5mrc.jpg)

  

![Register](https://res.cloudinary.com/dhyig7mwd/image/upload/v1674036200/secreen3_db13a1.jpg)

  
## API
### User 
#### Register a user

```http
  POST /api/users
```

| Parametre | Tip     | 
| :-------- | :------- |
| `form body` | `json` |

#### Login

```http
  POST /api/users/login
```

| Parametre | Tip     | 
| :-------- | :------- |
| `form body` | `json` |


### Goal
#### Get Goals

```http
  GET /api/goals/
```
#### Set a goal

```http
  POST /api/goals
```

| Parametre | Tip     | 
| :-------- | :------- |
| `form body` | `json` |

  #### Delete a goal

```http
  POST /api/goals/${id}
```

| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Goal ID |



  #### Update a goal

```http
  PUT /api/goals/${id}
```

| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Goal ID |

  