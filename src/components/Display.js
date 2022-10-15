import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import moment, { relativeTimeRounding } from "moment/moment";
import { type } from "@testing-library/user-event/dist/type";

const Display = (props) => {
  let { data } = props;

//   if (data) {
//     data.map(func);
//     function func(data){
//         let remainingTime = moment(data.startDate).countdown(data.endDate).toString();
//         return ({...data,remainingTime});
//     }
//     console.log(data);
//   } else {
//     console.log("no data");
//   }

  return (
    <>
      {data.map((st) => {
        return (
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={st.image}
              alt="Fail to load Image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {st.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {st.startDate}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Participate Now</Button>
            </CardActions>
          </Card>
        );
      })}
    </>
  );
};
export default Display;
