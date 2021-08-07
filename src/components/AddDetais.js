import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { Container, Grid } from "@material-ui/core";
import styled from "styled-components";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useState } from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

function AddDetais() {
   const useStyles = makeStyles({
      root: {
         "&:hover": {
            backgroundColor: "transparent",
         },
      },
      icon: {
         borderRadius: "50%",
         width: 16,
         height: 16,
         boxShadow:
            "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
         backgroundColor: "#f5f8fa",
         backgroundImage:
            "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
         "$root.Mui-focusVisible &": {
            outline: "2px auto rgba(19,124,189,.6)",
            outlineOffset: 2,
         },
         "input:hover ~ &": {
            backgroundColor: "#ebf1f5",
         },
         "input:disabled ~ &": {
            boxShadow: "none",
            background: "rgba(206,217,224,.5)",
         },
      },
      checkedIcon: {
         backgroundColor: "#137cbd",
         backgroundImage:
            "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
         "&:before": {
            display: "block",
            width: 16,
            height: 16,
            backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
            content: '""',
         },
         "input:hover ~ &": {
            backgroundColor: "#106ba3",
         },
      },
   });

   function StyledRadio(props) {
      const classes = useStyles();

      return (
         <Radio
            className={classes.root}
            disableRipple
            color="default"
            checkedIcon={
               <span className={clsx(classes.icon, classes.checkedIcon)} />
            }
            icon={<span className={classes.icon} />}
            {...props}
         />
      );
   }

   function createData(name, calories, fat, carbs, protein) {
      return { name, calories, fat, carbs, protein };
   }
   const [Name, setName] = useState();
   const [Email, setEmail] = useState();
   const [Gender, setGender] = useState();
   const [Hobby, setHobby] = useState();
   const [About, setAbout] = useState();
   const [rows, setrows] = useState([]);
   const [input, setinput] = useState("");
   const [input1, setinput1] = useState("");
   const [input3, setinput3] = useState("");
   const [input4, setinput4] = useState("");

   const classes = useStyles();
   const handleSubmit = (e) => {
      e.preventDefault();
      setrows([...rows, createData(Name, Email, Gender, Hobby, About)]);
      setinput("");
      setinput1("");
      setinput3("");
      setinput4("");
      setName("");
      setGender("");
      setHobby("");
      setEmail("");
      setAbout("");
   };
   const handleName = (e) => {
      setName(e.target.value);
      setinput(e.target.value);
   };
   const handleEmail = (e) => {
      setEmail(e.target.value);
      setinput1(e.target.value);
   };
   const handleGender = (e) => {
      setGender(e.target.value);
   };
   const handleHobby = (e) => {
      setHobby(e.target.value);
      setinput3(e.target.value);
   };
   const handleAbout = (e) => {
      setAbout(e.target.value);
      setinput4(e.target.value);
   };
   const deletion = (val) => {
      var filt = rows.filter((row) => {
         return row !== val;
      });
      setrows(filt);
   };

   const searchFilt = (e) => {
      const filteredData = rows.filter((row) => {
         return row.name === e.target.value;
      });
   };

   const handleSubmit1 = (e) => {
      e.preventDefault();
   };
   return (
      <Container fixed>
         <h1 align="center" style={{ padding: "40px", color: "white" }}>
            CRUD Oparations using JSON Data
         </h1>
         <Grid container spacing={3} style={{ marginTop: "20px" }}>
            <Grid item xs={6}>
               <FormWrapper>
                  <form onSubmit={handleSubmit}>
                     <FormControl>
                        <Heading>ADD / UPDATE</Heading>
                        <FormGrp>
                           <label>Name : &emsp;</label>
                           <input
                              type="text"
                              onChange={handleName}
                              value={input}
                           />
                        </FormGrp>
                        <FormGrp>
                           <label>Email :&emsp; </label>
                           <input
                              type="text"
                              onChange={handleEmail}
                              value={input1}
                           />
                        </FormGrp>
                        <FormGrp>
                           <label>Gender : &emsp; </label>
                           <RadioGroup
                              defaultValue="female"
                              aria-label="gender"
                              name="customized-radios"
                           >
                              <FormGrp1>
                                 <FormControlLabel
                                    value="female"
                                    control={<StyledRadio />}
                                    label="Female"
                                    onChange={handleGender}
                                 />
                                 <FormControlLabel
                                    value="male"
                                    control={<StyledRadio />}
                                    label="Male"
                                    onChange={handleGender}
                                 />
                                 &emsp; &emsp; &emsp; &emsp; &emsp;
                              </FormGrp1>
                           </RadioGroup>
                        </FormGrp>
                        <FormGrp>
                           <label>Hobby : &emsp;</label>
                           <input
                              type="text"
                              onChange={handleHobby}
                              value={input3}
                           />
                        </FormGrp>
                        <FormGrp>
                           <label>About : &emsp;</label>
                           <textarea onChange={handleAbout} value={input4} />
                        </FormGrp>
                        <button type="submit">Submit</button>
                     </FormControl>
                  </form>
               </FormWrapper>
            </Grid>
            <Grid item xs={6}>
               <form onSubmit={handleSubmit1}>
                  <input
                     onChange={searchFilt}
                     type="text"
                     placeholder="Search"
                     style={{
                        margin: "20px 0",
                        padding: "10px 20px",
                        borderRadius: "100px",
                        height: "45px",
                        fontSize: "18px",
                        border: "1px solid grey",
                        outline: "none",
                     }}
                  />
               </form>
               <TableContainer
                  component={Paper}
                  style={{ width: 800, textAlign: "center" }}
               >
                  <Table className={classes.table} aria-label="simple table">
                     <TableHead>
                        <TableRow>
                           <TableCell>Name</TableCell>
                           <TableCell align="right">Email</TableCell>
                           <TableCell align="right">Gender</TableCell>
                           <TableCell align="right">Hobby</TableCell>
                           <TableCell align="right">About</TableCell>
                           <TableCell
                              align="right"
                              style={{
                                 background: "red",
                                 color: "white",
                                 textAlign: "center",
                              }}
                           >
                              Delete row
                           </TableCell>
                        </TableRow>
                     </TableHead>
                     <TableBody>
                        {rows.map((row, index) => (
                           <TableRow key={index}>
                              <TableCell component="th" scope="row">
                                 {row.name}
                              </TableCell>
                              <TableCell align="right">
                                 {row.calories}
                              </TableCell>
                              <TableCell align="right">{row.fat}</TableCell>
                              <TableCell align="right">{row.carbs}</TableCell>
                              <TableCell align="right">{row.protein}</TableCell>
                              <TableCell
                                 align="right"
                                 style={{
                                    textAlign: "center",
                                    cursor: "pointer",
                                 }}
                                 onClick={() => deletion(row)}
                              >
                                 <DeleteForeverIcon />
                              </TableCell>
                           </TableRow>
                        ))}
                     </TableBody>
                  </Table>
               </TableContainer>
            </Grid>
         </Grid>
      </Container>
   );
}

const FormWrapper = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   align-items: center;
   width: 500px;
   border: 1px solid lightgrey;
   padding: 50px 30px;
   border-radius: 20px;
   background: white;

   form button {
      margin: 20px 10px;
      padding: 15px 15px;
      background-image: linear-gradient(
         to right,
         #e06ce5,
         #9898ff,
         #3eb6ff,
         #09c9fc,
         #61d5e0
      );
      transition: all 9s ease-in-out;
      border-radius: 50px;
      border: none;
      color: white;
      font-weight: bold;
      font-size: 17px;
   }

   form button:hover {
      background-image: linear-gradient(
         to right,
         #61d5e0,
         #09c9fc,
         #3eb6ff,
         #9898ff,
         #e06ce5
      );
      cursor: pointer;
   }
`;
const FormGrp = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-around;
   align-items: center;
   padding: 20px 0;
   font-size: 18px;
   input {
      padding: 10px 10px;
      width: 300px;
      font-size: 18px;
      letter-spacing: 3px;
   }
   textArea {
      height: 60px;
      width: 300px;
      padding: 10px 10px;
      font-size: 16px;
   }
   FormControlLabel {
      width: 250px;
   }
`;
const Heading = styled.h3`
   position: absolute;
   margin-left: 90px;
   margin-top: -70px;
   background: white;
   padding: 10px 20px;
   border: 1px solid lightgrey;
   border-radius: 50px;
   width: 200px;
   text-align: center;
   box-shadow: 2px 2px 2px 20px white;
`;
const FormGrp1 = styled.div`
   display: flex;
`;
export default AddDetais;
