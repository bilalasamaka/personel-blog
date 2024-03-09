import React from 'react';
import {
    BodyContainer,
    Container,
    HeroContainer
} from '../components/StyledComponents/StyledComponents';
import Navigation from '../components/Navigation/Navigation.jsx';
import ContactForm from '../components/Contact/ContactForm.jsx';
import Footer from '../components/Footer/Footer.jsx';
import Link from '../components/Utility/Link';
import Data from '../Data';
import TextEditor from '../TextEditor.js';

const Edit = () => {
    return (
        <>
            <Navigation page="Edit" />
            <BodyContainer>
                <HeroContainer
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 2, delay: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <Container flex top={6}>
                        <TextEditor></TextEditor>
                    </Container>
                </HeroContainer>
            </BodyContainer >
            <Footer />
        </>
    );
}

export default Edit;
