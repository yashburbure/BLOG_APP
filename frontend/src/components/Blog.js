import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { CardActionArea, CardHeader } from '@mui/material';

import './Blog_css.css';

const Blog=({title,description,imageUrl,userName})=> {
    // console.log(imageUrl);
    return (
        <div className="Blog">
            <Card sx={{ maxWidth:"60vw",marginTop:2,padding:2,boxShadow:"5px 5px 10px grey", margin:"auto"}}>
                <CardActionArea>
                    <CardHeader
                        avatar={
                            <Avatar  aria-label="recipe">
                                R
                            </Avatar>
                        }
                        title={userName}                        
                    />
                    <CardMedia
                    component="img"
                    height="140"
                    image={imageUrl}
                    alt={title}
                    
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}
export default Blog;