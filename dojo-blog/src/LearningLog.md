# Full React Tutorial

===

## 7

---

### Click Events

    <button onClick={handleClick}>Click</button>

If you pass in an argument or 'props' to our function like this:

    onClick={handleClick(props)}

it will invoke it right away (on render, because of the ()).
Instead, we can wrap it in an 'Anonymous Function' like so:

    onClick={() => {handleClick(props)}}

This way the handleClick(props) will only execute when the button is clicked.
