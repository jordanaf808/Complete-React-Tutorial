const Navbar = () => {
  return (
    <nav className='navbar'>
      <h1>The Dojo Blog</h1>
      <div className='links'>
        <a href='/'>Home</a>
        <a
          href='/create'
          style={{
            color: 'white',
            backgroundColor: '#f1356d',
            borderRadius: '8px',
          }}>
          New Blog
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

// In JSX we pass in an object to the style tag. the style's we pass in are also going to be in the form of an object {}
