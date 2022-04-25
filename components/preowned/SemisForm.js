import React from 'react'
import { Typography, Box, Button} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

const SemisForm = () => {
  return (
    
    <Box
        style={{ padding: 20, borderRadius: 10, marginBottom: 10, border: "1px solid #dbf2ff", flexDirection: "column"}}>

        <Box>
            <Typography
                      variant="h6"
                      component="p"
                      style={{ marginBottom: 10 }}
                    >
                    Cotiza Online
            </Typography>
        </Box>

      

        <Box>
          <TextField
          id="outlined-basic"
          label="Nombre Completo"
          variant="outlined"
          fullWidth
          style={{
            marginBottom: 10,
            border: "1px solid #dbf2ff",
            borderRadius: 10,
          }}
          />
        </Box>

        <Box>
          <TextField
          id="outlined-basic"
          label="Telefono"
          variant="outlined"
          fullWidth
          style={{
            marginBottom: 10,
            border: "1px solid #dbf2ff",
            borderRadius: 10,
          }}
          />
        </Box>

        <Box>
          <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          fullWidth
          style={{
            marginBottom: 10,
            border: "1px solid #dbf2ff",
            borderRadius: 10,
          }}
          />
        </Box>

        <Box>
          <TextField
          id="outlined-basic"
          label="Cuanto puedes dar de enganche?"
          variant="outlined"
          fullWidth
          style={{
            marginBottom: 10,
            border: "1px solid #dbf2ff",
            borderRadius: 10,
          }}
          />
        </Box>

        <Box>
          <TextField
          id="outlined-basic"
          label="Comentario"
          variant="outlined"
          fullWidth
          style={{
            marginBottom: 10,
            border: "1px solid #dbf2ff",
            borderRadius: 10,
          }}
          />
        </Box>

        <Box>
        <Button
          variant="contained"
           color="primary"
           fullWidth
           type="submit"
        >
          Cotizar
          </Button>
        </Box>

    </Box>
  )
}

export default SemisForm;