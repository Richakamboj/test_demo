import React from "react";
import {Card, CardAction, CardActionArea, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import useStyles from './Styles.js'

const NewsCard = ({ article:{ description, publishedAt, source, title,url,urlToImage}, i }) => {
    const classes = useStyles();
  

return(
<Card>
    <CardActionArea href={url} target="_blank">
        <CardMedia className={classes.media}
         image={urlToImage}/>
        <div>
            <Typography variant="body2"
            color="textSecondary"
            component="h2">{(new Date(publishedAt)).toDateString()}</Typography>
        
        <Typography variant="body2"
            color="textSecondary"
            component="h2">{source.name}</Typography>
        
        </div>
        <Typography gutterBottom
         variant="h5">
{title}

        </Typography>
    <CardContent>
        <Typography variant="body2"
        color="textSecondary"
        compoent="p">{description}</Typography>
    </CardContent>
    </CardActionArea>
    <CardActionArea>
        <Button size="small" color="primary">Learn More</Button>
    <Typography variant="h5"
    color="textSecondary">{i + 1}</Typography>
    
    
    </CardActionArea>
</Card>

)
 }
 export default NewsCard;