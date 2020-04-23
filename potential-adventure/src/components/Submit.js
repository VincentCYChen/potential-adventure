import React from 'react';

function Submit() {
  return (
    <div>
      <form>
        <label for="fname">First Name</label>
        <input type="text" name="fname" id="fname"/>

        <label for="lname">Last Name</label>
        <input type="text" name="lname" id="lname"/>

        <label for="title">Exhibition Title</label>
        <input type="text" name="title" id="title"/>

        <label for="opening-date">Opening Date</label>
        <input type="date" name="opening-date" id="opening-date"/>

        <label for="closing-date">Closing-date</label>
        <input type="date" name="closing-date" id="closing-date"/>

        <label for="address">Address</label>
        <input type="text" name="address" id="address"/>

        <label for="city">City</label>
        <input type="text" name="city" id="city"/>

        <label for="state">State</label>
        <input type="text" name="state" id="state"/>

        <label for="zip">Zip Code</label>
        <input type="text" name="zip" id="zip"/>

        <label for="pr">Press Release</label>
        <textarea id="pr"/>
      </form>
    </div>
  );
}

export default Submit;
