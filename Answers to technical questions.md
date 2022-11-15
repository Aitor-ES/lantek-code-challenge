1. How long did you spend on the coding test? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.

I spent 2 hours on the coding test.
If I had more time, I would improve the style of the table that displays the machine data and I would optimize the JS code that generates the table cells and rows.


2. What was the most useful feature added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

I used HTML and Javascript. Their implementations are handled by browsers. There are standards, but not every browser has the same exact implementation and there can be minor differences. Sometimes a browser adds a feature before it's added to the standard. So talking about "the latest version" is difficult. The current standard is ECMAScript 2022. One of the added features is the function Object.hasOwn(object, "foo") as a shorthand for Object.prototype.hasOwnProperty.call(object, "foo"), which I used in my code:

    tableCell = document.createElement('td');
    if (Object.hasOwn(item, 'manufacturer')) tableCell.innerText = item.manufacturer;
    tableRow.appendChild(tableCell);


3. How would you track down a performance issue in production? Have you ever had to do this?

I've never had to to that yet. I don't know how to do it, but I'd like to learn.


4. How would you improve the Lantek API that you just used?

I wouldn't send the username and password simply encoded in Base64. Even if the request is HTTPS, I see a potential security risk.