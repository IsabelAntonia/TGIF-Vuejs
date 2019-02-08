// header component
// checkbox component 
// footer component 



    Vue.component("my-header", {
  template: `<div>
                      <header class="row">


            <div class="col-xs-12 col-md-6 d-flex justify-content-center justify-content-md-start">
                <img class="img-fluid" src="assets/Logo.png" alt="logo">
            </div>

            <div class="col-xs-12 col-md-6 d-flex justify-content-center justify-content-md-end align-items-center">
                <img class="img-fluid mr-2" id="emailLogo" src="assets/email-logo-png-transparent-background-5.png" alt="search_logo">
                <h4><a href="mailto:info@tgif.net" target="_blank">info@tgif.net</a></h4>
            </div>

        </header>


        <nav class="navbar navbar-expand-lg navbar-light bg-light mt-4 p-0" id="thisNav">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
                    </li>


                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Congress 113
        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="senate-data.html">Senate</a>
                            <a class="dropdown-item" href="house-data.html">House</a>

                        </div>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Attendance
        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="senate-attendance.html">Senate</a>
                            <a class="dropdown-item" href="house-attendance.html">House</a>
                        </div>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Loyalty 
        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="senate-loyalty.html">Senate</a>
                            <a class="dropdown-item" href="house-loyalty.html">House</a>
                        </div>
                    </li>



                </ul>
            </div>
        </nav>
            </div>`
})

new Vue({ el: '#component-header' })