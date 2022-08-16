import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Register = () => {
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [istoken, setIstoken]=useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://projects13.herokuapp.com/register", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      let data = await res.json();
      if (data.token) {
        navigate("/signin")
      } else {
        alert("fill correctly")
      }
     setIstoken(true)
    } catch (error) {
      console.log(error);

    }
  };
 


  return (
    <div>
      <h2>Register page</h2>
      <div>
        
      </div>

      <form onSubmit={handlesubmit}>
        <input
          onChange={handleChange}
          type="email"
          name="email"
          placeholder="Enter Email"
          required
          
        />
        <input
          onChange={handleChange}
          type="text"
          name="password"
          placeholder="Enter password"
          required
          
        />
        <input type={"submit"} value="submit" />
      </form>
    </div>
  );
};
