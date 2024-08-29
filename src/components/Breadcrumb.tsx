import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper,faDollar,faHeartbeat } from '@fortawesome/free-solid-svg-icons';


function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export default function IconBreadcrumbs() {
    return (
        <div role="presentation" onClick={handleClick}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link
                    underline="hover"
                    sx={{ display: 'flex', alignItems: 'center' }}
                    color="inherit"
                    href="/"
                >
                    <FontAwesomeIcon icon={faNewspaper} />
                    Latest articles
                </Link>
                <Link
                    underline="hover"
                    sx={{ display: 'flex', alignItems: 'center' }}
                    color="inherit"
                    href="/material-ui/getting-started/installation/"
                >
                    <FontAwesomeIcon icon={faHeartbeat} />
                    Daily
                </Link>
                <Typography
                    sx={{ color: 'text.primary', display: 'flex', alignItems: 'center' }}
                >
                    <FontAwesomeIcon icon={faDollar} />
                    other
                </Typography>
            </Breadcrumbs>
        </div>
    );
}
