import { Container } from '@mui/material';
import Navigation from '../../Components/Navigation';
import PortfolioInsights from './PortfolioInsights';
import Pastdatesorting from './Pastdatasorting';

const Pastperformance = () => {
    return (
        <>
            <Navigation />
            <Container maxWidth="xl" sx={{ px: { xs: 5, sm: 10 } }}>
                <Pastdatesorting/>
                <PortfolioInsights />
            </Container>
        </>
    );
};

export default Pastperformance;
