import { useStyles } from './styles';
import {
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Box,
} from '@material-ui/core';
import Icons from '@assets/icons';
import React from 'react';

export interface CategoryProps {
  title: string;
  tournament: JSX.Element;
  data: any;
}

const Category: React.FC<CategoryProps> = (props): JSX.Element => {
  const { title, tournament, data } = props;
  const classes = useStyles();

  return (
    <div className={classes.containerCategory}>
      <Typography className={classes.fontWeightBold}>{title}</Typography>
      <Box boxShadow={3}>
        <TableContainer className={classes.table}>
          <Table>
            <TableHead>
              <TableCell className={classes.firstHead}>{tournament}</TableCell>
              <TableCell></TableCell>
              <TableCell align="center" className={classes.inputHead}>
                1
              </TableCell>
              <TableCell align="center" className={classes.inputHead}>
                x
              </TableCell>
              <TableCell align="center" className={classes.inputHead}>
                x2
              </TableCell>
              <TableCell></TableCell>
              <TableCell>
                <Icons.ArrowDown />
              </TableCell>
            </TableHead>
            <TableBody>
              {data.map((value: any, index: number) => (
                <TableRow key={index}>
                  <TableCell>
                    <Typography variant="body2">{value.team1}</Typography>
                    <Typography variant="body2">{value.team2}</Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography variant="body2" className={classes.textGrey}>
                      {value.date}
                    </Typography>
                    <Typography variant="body2" className={classes.textGrey}>
                      {value.time}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <div className={classes.input}>
                      <Typography variant="body2">
                        {value.losingOdds}
                      </Typography>
                    </div>
                  </TableCell>
                  <TableCell align="center">
                    <div className={classes.input}>
                      <Typography variant="body2">{value.drawOdds}</Typography>
                    </div>
                  </TableCell>
                  <TableCell align="center">
                    <div className={classes.input}>
                      <Typography variant="body2">{value.winOdds}</Typography>
                    </div>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="body2" className={classes.textGrey}>
                      {value.amount}
                    </Typography>
                  </TableCell>
                  <TableCell></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};

export default Category;
