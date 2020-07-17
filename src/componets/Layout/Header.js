import React, { Component } from 'react';

class Header extends Component {

    render() {
        return (
            <nav id="nav-bar" class="navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark">
                <div class="container"><button class="navbar-toggler" type="button"><i
                            class="mdi mdi-menu"></i></button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <div data-nav="list" class="navbar-nav   ml-auto navbar-center">
                            <ul class="navbar-nav ml-auto navbar-center" id="mySidenav">
                                <li class="nav-item active"><a href="#home" class="nav-link active">Home</a></li>
                                <li class="nav-item"><a href="#about" class="nav-link">About</a></li>
                                <li class="nav-item"><a href="#features" class="nav-link">Features</a></li>
                                <li class="nav-item"><a href="#services" class="nav-link">Services</a></li>
                                <li class="nav-item"><a href="#testimonial" class="nav-link">Testimonial</a></li>
                                <li class="nav-item"><a href="#team" class="nav-link">Team</a></li>
                                <li class="nav-item"><a href="#pricing" class="nav-link">Pricing</a></li>
                                <li><a class="nav-link" href="/home-multipurpose">Contact</a></li>
                            </ul><button class="btn btn-sm navbar-btn">Sign up</button>
                        </div>
                    </div>
                </div>
            </nav>

        );
    }

}

export default Header;
