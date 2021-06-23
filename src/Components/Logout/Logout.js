import React from 'react';
import { useHistory } from 'react-router-dom'
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { Grow, Paper, Popper, MenuItem, MenuList, makeStyles, Avatar } from '@material-ui/core';
import S from 'string';

const useStyles = makeStyles({
    avatar: {
        color: '#14196b',
        backgroundColor: '#ffffffe8',
        fontWeight: 'bold',
        cursor: 'pointer',
        fontFamily: 'Helvetica',
        height: '35px',
        width: '35px',
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
        marginRight: '110px'
    },

    dropDownLogoutButton: {
        width: '100%'
    }

});

export default function Logout() {
    const history = useHistory();
    const classes = useStyles();
    const userName =JSON.parse(localStorage.getItem('name'))
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
        
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);


    };

    const logoutFunctionality = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('password');

        if (localStorage.getItem('email') === null && localStorage.getItem('password') === null) {
            history.push("/login");
        }
    }

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

        <div style={{right: 0, position: 'absolute', marginRight: '5px'}}>
            <div >
                <Avatar
                    ref={anchorRef}
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                    className={classes.avatar}
                >
                   <div>{S(userName.charAt(0)).capitalize().s}</div> 

                </Avatar>
            </div>
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                            boxShadow: '2px 5px 7px 2px grey', marginTop: '2px'
                        }}
                    >
                        <Paper className={classes.paper}>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>

                                    <MenuItem onClick={handleClose}>
                                        <div>
                                            <Avatar className={classes.dropDownAvatar}>
                                               {S(userName.charAt(0)).capitalize().s}
                                            </Avatar>
                                        </div>
                                        {S(userName).capitalize().s}

                                    </MenuItem><hr />
                                    <MenuItem onClick={handleClose}>
                                        <div onClick={logoutFunctionality}
                                            className={classes.dropDownLogoutButton}>
                                            Logout
                                        </div>
                                    </MenuItem> <hr />
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>

        </div>
    );
}
