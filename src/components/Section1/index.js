import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import useWebAnimations, { backInDown } from "@wellyshen/use-web-animations";
import style from './section1.module.css'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Slide1 from '../images/slide01.jpg'
import Slide2 from '../images/slide02.jpg'
import BluePrint from '../images/BluePrint.svg'
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
}));
const tileData = [
    {
        img: Slide1,
        title: 'Image',
        author: 'author',
        cols: 3,
      },
      {
        img: Slide2,
        title: 'Image',
        author: 'author',
        cols: 3,
      },
      {
        img: BluePrint,
        title: 'Image',
        author: 'author',
        cols: 3,
      },
     ];
const Section1 = () => {

    const classes = useStyles();
    const { keyframes, timing } = backInDown;
    const { ref } = useWebAnimations({
      keyframes,
      timing: {
        ...timing,
        iterations: Infinity,
        duration:5000,
      },
    });
    // console.log(timing)
    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed>
           <h1 ref={ref} className={style.mainHeading}>React Web Animations</h1>
           <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
      {/* <img src={BluePrint} alt='dfs' /> */}
      </Container>

        </React.Fragment>
    )
}

export default Section1
