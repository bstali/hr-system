import React from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { Grow, Paper, Popper, MenuItem, MenuList, makeStyles, Avatar } from '@material-ui/core';
import S from 'string'

// import Paper from '@material-ui/core/Paper';
// import Popper from '@material-ui/core/Popper';
// import MenuItem from '@material-ui/core/MenuItem';
// import MenuList from '@material-ui/core/MenuList';
// import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    avatar: {
        color: '#14196b',
        backgroundColor: '#ffffffe8',
        marginLeft: '1000px',
        fontWeight: 'bold',
        cursor: 'pointer',
        fontFamily: 'Helvetica',

    },

    dropDownAvatar: {
        color: '#white',
        backgroundColor: '#14196b',
        textAlign: 'right',
        marginRight: '10px',
        fontWeight: 'bold',
        cursor: 'pointer',
        fontFamily: 'Helvetica',
    },

    paper: {
        padding: '0px 0px 0px 0px',

    }
});

export default function Logout() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const email = JSON.parse(localStorage.getItem('email'))


    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (

        <div>
            <div >
                <Avatar
                    ref={anchorRef}
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                    className={classes.avatar}
                >
                    {S(email.charAt(0)).capitalize().s}

                </Avatar>
            </div>
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                            boxShadow: '2px 5px 7px 2px grey', marginTop: '4px'
                        }}
                    >
                        <Paper className={classes.paper}>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>

                                    <MenuItem onClick={handleClose}>
                                        <div>
                                            <Avatar className={classes.dropDownAvatar}>
                                                {S(email.charAt(0)).capitalize().s}
                                            </Avatar>
                                        </div>
                                         My Account
                                    </MenuItem><hr />
                                    <MenuItem onClick={handleClose}>Logout</MenuItem> <hr />
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>

        </div>
    );
}





































// import React from 'react';
// import { Menu, MenuItem, Avatar, makeStyles } from '@material-ui/core';


// const useStyles = makeStyles({


//     // secondMenuItem: {
//     //     marginLeft: '70px'
//     // }
// })

// export default function Logout() {
//     const classes = useStyles();
//     const [anchorEl, setAnchorEl] = React.useState(null);


//     const handleClick = (event) => {
//         setAnchorEl(event.currentTarget);
//     };

//     const handleClose = () => {
//         setAnchorEl(null);
//     };

//     return (
//         <div>
            // <Avatar aria-controls="simple-menu"
            //     aria-haspopup="true"
            //     onClick={handleClick}
            //     className={classes.avatar}>
            // </Avatar>
//             <Menu
//                 id="simple-menu"
//                 anchorEl={anchorEl}
//                 keepMounted
//                 open={Boolean(anchorEl)}
//                 onClose={handleClose}
//             >


//                 <MenuItem onClick={handleClose}>

//                     My Profile
//                 </MenuItem><hr />
//                 <MenuItem
//                     onClick={handleClose} className={classes.secondMenuItem}>
//                     Logout
//                 </MenuItem>
//                 <hr />
//             </Menu>
//         </div>
//     );
// }