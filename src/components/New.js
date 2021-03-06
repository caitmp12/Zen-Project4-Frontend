import React from "react"
import { Link } from "react-router-dom"

const New = (props) => {
    const [formData, setFormData] = React.useState(props.post)

    // const {posts} = props

    console.log(props)

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleSubmit(formData)
        props.history.push("/home")
    }

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    return(
        <div class="new">
            <h2>Post your WIP and find a CP!</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label><input 
                    type="text"
                    name="title"
                    value={formData.title}
                    placeholder="Title"
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Genre</label><input
                    type="text"
                    name="genre"
                    value={formData.genre}
                    placeholder="Genre"
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Blurb</label><input
                    className="textarea-medium"
                    type="textarea"
                    rows="5"
                    wrap="soft"
                    name="blurb"
                    value={formData.blurb}
                    placeholder="Blurb"
                    onChange={handleChange}
                    />
                </div>   
                <div>
                    <label>Username</label><input
                    type="text"
                    name="username"
                    value={formData.username}
                    placeholder="Username"
                    onChange={handleChange}
                    />
                </div>      
                <div>
                    <label>Contact</label><input
                    type="text"
                    name="contact"
                    value={formData.contact}
                    placeholder="Contact"
                    onChange={handleChange}
                    />
                </div>  
                <input type="submit" value={props.label} />       
            </form>

        </div>
    )

}

export default New; 