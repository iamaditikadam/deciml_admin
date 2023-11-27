import { Button, Card, CssBaseline } from "@mui/material";
import { makeStyles } from '@mui/styles';
import logo from "assets/logo.png"
/*import Center from "components/Center"*/
import { Colors } from "models/Colors"
import { useCallback, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "services/contexts/AuthContext"

const useStyles = makeStyles((theme) => ({
	card: {
		backgroundColor: Colors.neutrals.lead200,
	},
}))

export default function Login(){
	const { signInWithGoogle } = useAuth();

	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate()
	const classes = useStyles()
	const handleSubmit = useCallback(
		async function (event:any) {
			event.preventDefault();
			try{
				setError("");
				setLoading(true);
				await signInWithGoogle();
				navigate("/");
			} catch(e){
				setError("Failed to log in");
				alert(error);
			}

			setLoading(false);
		}, [error, navigate, signInWithGoogle]
	)

	return(
		<div style={{
			backgroundColor: Colors.neutrals.lead200,
			width:"100vw",
			height: "100vh",
			textAlign: "center",
		}}>
			<Card elevation={0} className={classes.card} style = {{
				width: 400,
				padding: 20
			}}>
				
			<img src={logo} alt="Logo" height={400} />
			<form onSubmit={handleSubmit}>
				<div>
					<Button disabled = {loading} type="submit" >Sign In with Google</Button>
				</div>
			</form>

			</Card>
		</div>
	)
		

}