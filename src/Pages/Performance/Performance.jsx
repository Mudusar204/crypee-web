import { Container } from '@mui/material';

import Navigation from '../../Components/Navigation';
import DateSorting from './DateSorting';
import PortfolioInsights from './PortfolioInsights';

const Performance = () => {
    return (
        <>
            <Navigation />

            <Container maxWidth="xl" sx={{ px: { xs: 5, sm: 10 } }}>
                <DateSorting />
                <PortfolioInsights />
            </Container>
        </>
    );
};

export default Performance;
