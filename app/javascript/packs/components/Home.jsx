import React from "react";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    Container,
    Grid,
    makeStyles,
    Paper,
    Typography
} from "@material-ui/core";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
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
    pos: {
        marginBottom: 12,
    },
}));

function HomePage() {
    const classes = useStyles();

  return (
      <Container maxWidth="lg">
          <div className={classes.root}>
              <Grid container spacing={3}>
                  <Grid item xs={12}>
                          <Card className={classes.paper}>
                              <CardContent>
                                  <Typography className={classes.title} color="textSecondary" gutterBottom>
                                      Bem vindo(a)!
                                  </Typography>
                                  <Typography variant="h5" component="h2">
                                      Desafio Plathanus
                                  </Typography>
                                  <Typography className={classes.pos} color="textSecondary">
                                      Dev FullStack
                                  </Typography>
                                  <Typography variant="body2" component="p">
                                      Esta aplicação apresenta demos de soluções para o três users stories do desafio da
                                      Plathanus
                                      <br />
                                      {"'It's just a test! '"}
                                  </Typography>
                              </CardContent>
                              <CardActions>
                                  <Button size="small" color="primary" target="_blank" href="https://github.com/Guistoff081/test-dev-plathanus" >Ver Documentação no Github</Button>
                              </CardActions>
                          </Card>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                      <Card className={classes.paper}>
                          <CardContent>
                              <Typography className={classes.title} color="textSecondary" gutterBottom>
                                  Demo #1
                              </Typography>
                              <Typography variant="h5" component="h2">
                                  Roman numerals Converter
                              </Typography>
                              <Typography className={classes.pos} color="textSecondary">
                              </Typography>
                              <Typography variant="body2" component="p">
                                  Converts a String format Roman Numeral to An Indo-Arabic Numeral.
                                  <br />
                                  {"'It's just a test! '"}
                              </Typography>
                          </CardContent>
                          <CardActions>
                              <Button component={Link} to="/roman-numeral-converter" size="small" color="primary" >Acessar Demo</Button>
                          </CardActions>
                      </Card>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                      <Paper className={classes.paper}>xs=12 sm=6</Paper>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                      <Paper className={classes.paper}>xs=6 sm=3</Paper>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                      <Paper className={classes.paper}>xs=6 sm=3</Paper>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                      <Paper className={classes.paper}>xs=6 sm=3</Paper>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                      <Paper className={classes.paper}>xs=6 sm=3</Paper>
                  </Grid>
              </Grid>
          </div>
      </Container>
  );
}

export default HomePage;
