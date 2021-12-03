import React, {Component} from 'react'
import {
    Button,
    Card,
    CardActions,
    CardContent,
    Container,
    Grid,
    TextField,
    Typography,
    withStyles
} from "@material-ui/core";
import axios from "axios";

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    title: {
        fontSize: 14,
    },
    button: {
        justifyContent: 'center'
    }
});

class RomanNumeralConverter extends Component {
    constructor(props) {
        super(props);
        this.state = {roman_numeral: '', converted_roman_numeral: '', arabic_numeral: '', converted_arabic_numeral: ''};
    }

    handleChange = e => {
        let newValue = e.target.value;
        let key = e.target.name;
        this.setState({
            [key]: newValue
        });
    }

    // handles the converting of a roman numeral expression into a indo-arabic number
    handleSubmitRomanToArabic = (e) => {
        e.preventDefault();
        let data = this.state;
        console.log(data)
        axios.get(`/api/v1/roman_numerals/roman_to_arabic?roman_numeral=${data.roman_numeral}`)
            .then(response => {
                console.log(response)
                this.setState({
                    converted_roman_numeral: response.data.results
                })
            })
            .catch((error => {
                console.error("An error occurred: " + error);
            }));
    }
    // handles the converting of a arabic number into a roman numeral expression
    handleSubmitArabicToRoman = (e) => {
        e.preventDefault();
        let data = this.state;
        console.log(data)
        axios.get(`/api/v1/roman_numerals/arabic_to_roman?arabic_numeral=${data.arabic_numeral}`)
            .then(response => {
                console.log(response)
                this.setState({
                    converted_arabic_numeral: response.data.results
                })
            })
            .catch((error => {
                console.error("An error occurred: " + error);
            }));
    }

    render() {
        const {classes} = this.props;
        return (<Container maxWidth="lg">
            <Grid container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={3}>
                <Grid item xs={12}>
                    <Card className={classes.paper}>
                        <form onSubmit={this.handleSubmitRomanToArabic.bind(this)}>
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Roman Numeral To Arabic
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    Type a Roman Numeral Expression
                                </Typography>
                                <TextField id="inputRomanNumeral" name="roman_numeral" label="Roman Numeral"
                                           variant="filled"
                                           onChange={this.handleChange}/>
                                <Typography variant="h5" spacing={3}>Converted Roman Numeral</Typography>
                                <TextField id="inputConvertedRomanNumeral" name="converted_roman_numeral"
                                           label="Converted Numeral" variant="filled"
                                           value={this.state.converted_roman_numeral} onChange={this.handleChange}/>
                            </CardContent>
                            <CardActions className={classes.button}>
                                <Button variant="contained" size="small" color="primary" type="submit">Convert</Button>
                            </CardActions>
                        </form>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <Card className={classes.paper}>
                        <form onSubmit={this.handleSubmitArabicToRoman.bind(this)}>
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Indo-Arabic Numeral To Roman
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    Type a Indo-Arabic Numeral
                                </Typography>
                                <TextField id="inputArabicNumeral" name="arabic_numeral" label="Arabic Numeral"
                                           variant="filled"
                                           onChange={this.handleChange}/>
                                <Typography variant="h5" spacing={3}>Converted Arabic Numeral</Typography>
                                <TextField id="inputConvertedArabicNumeral" name="converted_arabic_numeral"
                                           label="Converted Arabic Numeral" variant="filled"
                                           value={this.state.converted_arabic_numeral} onChange={this.handleChange}/>
                            </CardContent>
                            <CardActions className={classes.button}>
                                <Button variant="contained" size="small" color="primary" type="submit">Convert</Button>
                            </CardActions>
                        </form>
                    </Card>
                </Grid>
            </Grid>
        </Container>)
    }
}

export default withStyles(styles, {withTheme: true})(RomanNumeralConverter);