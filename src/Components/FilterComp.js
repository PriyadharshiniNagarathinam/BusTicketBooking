import React from 'react';
import {
    Box,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Collapse,
    Typography,
} from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

function FilterComp() {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    const [checked, setChecked] = React.useState([0]);

    return (
        <Box sx={{ width: '250px', height: '100vh', borderRight: '1px solid #e0e0e0' }}>
            <Typography fontWeight="bold" sx={{ textAlign: 'center', mb: 1, mt: '20px' }}>
                FILTERS
            </Typography>
            <Divider />
            <List>
                <Typography fontWeight="bold" sx={{ margin: 0, ml: 2 }}>
                    Bus Types
                </Typography>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <Checkbox tabIndex={-1} />
                        </ListItemIcon>
                        <ListItemText primary="AC" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <Checkbox tabIndex={-1} />
                        </ListItemIcon>
                        <ListItemText primary="Non AC" />
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />
            <List>
                <Typography fontWeight="bold" sx={{ margin: 0, ml: 2 }}>
                    Rating
                </Typography>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <Checkbox tabIndex={-1} />
                        </ListItemIcon>
                        <ListItemText primary="Above 4.5" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <Checkbox tabIndex={-1} />
                        </ListItemIcon>
                        <ListItemText primary="Above 4" />
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />
            <List>
                <Typography fontWeight="bold" sx={{ margin: 0, ml: 2 }}>
                    Amenities
                </Typography>
                <Stack direction="column" spacing={1} sx={{ ml:3,mr:3 }}>
                    <Chip label="wifi" size="small" />
                    <Chip label="Water bottle" variant="outlined" size="small" />
                    <Chip label="Blankets" variant="outlined" size="small" />
                    <Chip label="Movie" variant="outlined" size="small" />
                    <Chip label="Track My Bus" variant="outlined" size="small" />
                </Stack>
            </List>
        </Box>
    );
}

export default FilterComp;
