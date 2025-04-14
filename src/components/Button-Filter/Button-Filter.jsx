import React from 'react';
import PropTypes from 'prop-types'

const ButtonFilter = ({onSelectFilter, type, selected}) => {

ButtonFilter.defaultProps = {
         onSelectFilter:() => {},
      };
 ButtonFilter.propTypes = {
         onSelectFilter:PropTypes.func,
        type: PropTypes.string.isRequired,
       selected:PropTypes.bool.isRequired
       }



  const onSelect = (e) => {
    const select = e.target.innerHTML
              onSelectFilter(select);
      
     }

   let clas = "";

   if (selected) {clas = "selected"}

    return(
      <li>
      <button class = { clas } onClick = {onSelect}>{type}</button>
    </li>

    );
};
 export default ButtonFilter ;
