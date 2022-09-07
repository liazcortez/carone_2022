import React from 'react';
import { TableCell, Avatar,Chip, Link,Typography}from '@mui/material';
import ObjExist from '../utils/ObjExist';
import moment from 'moment';
// import { useTheme } from '@mui/system'
// import { useRouter } from 'next/router';
import NumberFormat from 'react-number-format';
import Cities from '../utils/constans/Cities';
      
const HandleTableCellData = ({row, tableKey, index, link}) => {

  let ObjKeys = tableKey.name.split(".");
  // const theme = useTheme()
  // const router = useRouter();

  const classes = {
    success:{
      // color: theme.palette.common.white,
      // backgroundColor: theme.palette.success.main
    }
  };

  const renderType={
    money:(row,key,ObjKeys)=>ObjExist(row,ObjKeys,'')?<NumberFormat value={ObjExist(row,ObjKeys,'')} displayType={'text'} thousandSeparator={true} prefix={'$'} />:'- - -',
    avatar:(row,key,ObjKeys)=><Avatar alt={ ObjExist(row,[key.alt],'N/A')} src={ ObjExist(row,ObjKeys,'- - -')} />,
    date:(row,key,ObjKeys)=>moment(ObjExist(row,ObjKeys,'- - -')).format('DD MMMM YYYY'),
    boolean:(row,key,ObjKeys)=>ObjExist(row,ObjKeys) === 1 ? <Chip label={ObjExist(key,['BooleanValues','Active'],'Active')} sx={classes.success} />:<Chip  label={ObjExist(key,['BooleanValues','Inactive'],'Inactive')} color="error" />,
    link: (row, key, ObjKeys, link) => (false
      // || (user && user.permissions && !ObjExist(user, ["permissions",router.asPath.split("/")[1], "u"], true))
      )?
    ObjExist(row, ObjKeys, "- - -"):
    <Link sx={{ cursor: 'pointer',textDecoration:'none',color:'black' }} href={`/${key.link}/${ObjExist(row, ObjKeys, "- - -")}`}>{ObjExist(row, ObjKeys, "- - -")}</Link> 
    ,
    redirect: (row, key, ObjKeys, link) => <Link target="_blank" rel="noopener" href={key.link} style={{textDecoration: 'none'}}>
    <Typography style={{textTransform:'initial'}} variant="body2" color="textSecondary">
     {ObjExist(key,['link'], "- - -")}
    </Typography>
  </Link>,
   redirect2: (row, key, ObjKeys, link) => <Link target="_blank" rel="noopener" href={ObjExist(row,ObjKeys,'')} style={{textDecoration: 'none'}}>
   <Typography style={{textTransform:'initial'}} variant="body2" color="textSecondary">
   <strong>
    {ObjExist(row,ObjKeys,'')}
   </strong>
   </Typography>
 </Link>, 
    replace:(row,key,ObjKeys)=>{
      let index = Cities.findIndex(city => ObjExist(row,ObjKeys,'') === city.name)
      if(index === -1) return ObjExist(row,ObjKeys,'- - -')
     return Cities[index].value
    } 
  }


  // <Typography style={{ textDecoration: 'none', cursor: 'pointer', fontWeight: 500, color: theme.palette.text.primary }} href={key.link}>{ObjExist(key,['link'], "- - -")}</Typography>
  

  return (
    <TableCell style={{textTransform:'capitalize'}}>
      {renderType[tableKey.type]
        ? renderType[tableKey.type](row, tableKey, ObjKeys, link)
        : ObjExist(row, ObjKeys, "- - -")}
    </TableCell>
  );
};

export default HandleTableCellData;
