<!-- Navigation bar -->
<div class="big-navigation">
    <div class="navigation nav navbar navbar-expand-lg p-0 navbar-dark">

        <div class="container-fluid">

            <!-- Toggle button -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- Navigation bar brand -->
            <a class="navbar-brand nav-img" href="../../index.php">
                <img src="../images/01_logobachkhoa.png" height="100%" width="100%" alt="">
            </a>

            <!-- Other icons -->
            <a class="navbar-brand nav-icons d-flex justify-content-end me-0 d-lg-none d-flex">

                <svg class="d-md-block d-none" xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                    viewBox="0 0 25 25" fill="none" data-bs-toggle="collapse" data-bs-target="#search-fields">
                    <path
                        d="M17.8674 15.7233H16.7381L16.3379 15.3373C17.7387 13.7078 18.582 11.5923 18.582 9.29102C18.582 4.15952 14.4225 0 9.29102 0C4.15952 0 0 4.15952 0 9.29102C0 14.4225 4.15952 18.582 9.29102 18.582C11.5923 18.582 13.7078 17.7387 15.3373 16.3379L15.7233 16.7381V17.8674L22.8702 25L25 22.8702L17.8674 15.7233ZM9.29102 15.7233C5.73185 15.7233 2.85878 12.8502 2.85878 9.29102C2.85878 5.73185 5.73185 2.85878 9.29102 2.85878C12.8502 2.85878 15.7233 5.73185 15.7233 9.29102C15.7233 12.8502 12.8502 15.7233 9.29102 15.7233Z"
                        fill="white" />
                </svg>


                <svg class="cart-btn" xmlns="http://www.w3.org/2000/svg" width="20" height="25" viewBox="0 0 20 25"
                    fill="none" data-bs-toggle="collapse" data-bs-target="#cart-fields">
                    <path
                        d="M17.5 5H15C15 2.2375 12.7625 0 10 0C7.2375 0 5 2.2375 5 5H2.5C1.125 5 0 6.125 0 7.5V22.5C0 23.875 1.125 25 2.5 25H17.5C18.875 25 20 23.875 20 22.5V7.5C20 6.125 18.875 5 17.5 5ZM10 2.5C11.375 2.5 12.5 3.625 12.5 5H7.5C7.5 3.625 8.625 2.5 10 2.5ZM17.5 22.5H2.5V7.5H5V10C5 10.6875 5.5625 11.25 6.25 11.25C6.9375 11.25 7.5 10.6875 7.5 10V7.5H12.5V10C12.5 10.6875 13.0625 11.25 13.75 11.25C14.4375 11.25 15 10.6875 15 10V7.5H17.5V22.5Z"
                        fill="white" />
                </svg>

                <svg class="user-btn" xmlns="http://www.w3.org/2000/svg" width="20" height="25" viewBox="0 0 63.425 63.425"
                            fill="none" data-bs-toggle="collapse" data-bs-target="#user-fields">
                            <path
                                d = "M44.016,38.421c-1.26-0.592-2.551-1.197-3.442-1.77c4.727-3.597,7.668-9.9,7.668-16.787C48.242,8.911,40.827,0,31.713,0   S15.184,8.911,15.184,19.864c0,6.902,2.939,13.19,7.672,16.784c-0.889,0.57-2.184,1.178-3.45,1.771   c-6.202,2.91-15.574,7.309-15.574,22.006v3h55.761v-3C59.592,45.727,50.219,41.331,44.016,38.421z M10.012,57.425   c1.083-8.478,6.82-11.171,11.941-13.574c2.787-1.307,5.193-2.437,6.671-4.419l0.415-0.558l0.945-5.049l-2.006-1.017   c-4.065-2.061-6.796-7.263-6.796-12.945c0-7.645,4.724-13.864,10.529-13.864s10.529,6.22,10.529,13.864   c0,5.627-2.691,10.812-6.698,12.901l-1.971,1.028l1.018,5.426l0.524,0.61c1.5,1.746,3.749,2.801,6.354,4.022   c5.122,2.403,10.86,5.096,11.942,13.573H10.012V57.425z"
                                fill="white"
                            />
                </svg>
                <svg class="logout-btn" xmlns="http://www.w3.org/2000/svg" width="20" height="25" viewBox="0 0 24 26">
                    <path 
                        d="M15,24H0V2h15v8h-2V4H2v18h11v-6h2V24z M18.4,18.7L17,17.3l3.3-3.3H5v-2h15.3L17,8.7l1.4-1.4L24,13L18.4,18.7z"
                        fill="white"
                    ></path>
                    
                </svg>
            </a>

            <!-- Collapse items -->
            <div class="collapse navbar-collapse d-lg-flex justify-content-lg-around" id="navbarSupportedContent">

                <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-lg-5">
                    <!-- Home -->
                    <li class="nav-item">
                        <a class="nav-link fw-bold fs-4 text-light" aria-current="page" href="../index.php">Home</a>
                    </li>

                    <!-- Products -->
                    <li class="nav-item">
                        <a class="nav-link fw-bold fs-4 text-light" href="./product.php">Products</a>
                    </li>

                    <!-- News -->
                    <li class="nav-item">
                        <a class="nav-link fw-bold fs-4 text-light" href="./news.php">News</a>
                    </li>

                    <!-- Support -->
                    <li class="nav-item">
                        <a class="nav-link fw-bold fs-4 text-light" href="#support">Support</a>
                    </li>

                    <!-- About -->
                    <li class="nav-item">
                        <a class="nav-link fw-bold fs-4 text-light" href="./about.php">About</a>
                    </li>

                    <!-- Search icon -->
                    <li class="nav-item d-md-none d-sm-block d-flex btn">

                        <a class="nav-link d-inline-block p-0 m-0" href="#search">
                            <svg class="d-md-none d-sm-block" xmlns="http://www.w3.org/2000/svg" width="25" height="15"
                                viewBox="0 0 25 25" fill="none">
                                <path class="search-icon"
                                    d="M17.8674 15.7233H16.7381L16.3379 15.3373C17.7387 13.7078 18.582 11.5923 18.582 9.29102C18.582 4.15952 14.4225 0 9.29102 0C4.15952 0 0 4.15952 0 9.29102C0 14.4225 4.15952 18.582 9.29102 18.582C11.5923 18.582 13.7078 17.7387 15.3373 16.3379L15.7233 16.7381V17.8674L22.8702 25L25 22.8702L17.8674 15.7233ZM9.29102 15.7233C5.73185 15.7233 2.85878 12.8502 2.85878 9.29102C2.85878 5.73185 5.73185 2.85878 9.29102 2.85878C12.8502 2.85878 15.7233 5.73185 15.7233 9.29102C15.7233 12.8502 12.8502 15.7233 9.29102 15.7233Z"
                                    fill="grey" />
                            </svg>
                        </a>

                        <input class="ms-3 w-75 border-0 bg-black d-md-none d-sm-inline-block" type="text"
                            placeholder="Searching on my website...">

                    </li>

                </ul>

            </div>

            <!-- Other icons -->
            <a class="navbar-brand nav-icons d-flex justify-content-around me-0 d-none d-lg-flex">
                <div class="btn m-1">

                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none"
                        data-bs-toggle="collapse" data-bs-target="#search-fields">
                        <path
                            d="M17.8674 15.7233H16.7381L16.3379 15.3373C17.7387 13.7078 18.582 11.5923 18.582 9.29102C18.582 4.15952 14.4225 0 9.29102 0C4.15952 0 0 4.15952 0 9.29102C0 14.4225 4.15952 18.582 9.29102 18.582C11.5923 18.582 13.7078 17.7387 15.3373 16.3379L15.7233 16.7381V17.8674L22.8702 25L25 22.8702L17.8674 15.7233ZM9.29102 15.7233C5.73185 15.7233 2.85878 12.8502 2.85878 9.29102C2.85878 5.73185 5.73185 2.85878 9.29102 2.85878C12.8502 2.85878 15.7233 5.73185 15.7233 9.29102C15.7233 12.8502 12.8502 15.7233 9.29102 15.7233Z"
                            fill="white" />
                    </svg>
                </div>
                <div class="btn m-1">

                    <svg class="cart-btn" xmlns="http://www.w3.org/2000/svg" width="20" height="25" viewBox="0 0 20 25"
                        fill="none" data-bs-toggle="collapse" data-bs-target="#cart-fields">
                        <path
                            d="M17.5 5H15C15 2.2375 12.7625 0 10 0C7.2375 0 5 2.2375 5 5H2.5C1.125 5 0 6.125 0 7.5V22.5C0 23.875 1.125 25 2.5 25H17.5C18.875 25 20 23.875 20 22.5V7.5C20 6.125 18.875 5 17.5 5ZM10 2.5C11.375 2.5 12.5 3.625 12.5 5H7.5C7.5 3.625 8.625 2.5 10 2.5ZM17.5 22.5H2.5V7.5H5V10C5 10.6875 5.5625 11.25 6.25 11.25C6.9375 11.25 7.5 10.6875 7.5 10V7.5H12.5V10C12.5 10.6875 13.0625 11.25 13.75 11.25C14.4375 11.25 15 10.6875 15 10V7.5H17.5V22.5Z"
                            fill="white" />
                    </svg>
                </div>
                <div class="btn m-1" style="background-color: #0866FF;">
                    <svg class="user-btn" xmlns="http://www.w3.org/2000/svg" width="20" height="25" viewBox="0 0 63.425 63.425"
                            fill="none" data-bs-toggle="collapse" data-bs-target="#user-fields">
                            <path
                                d = "M44.016,38.421c-1.26-0.592-2.551-1.197-3.442-1.77c4.727-3.597,7.668-9.9,7.668-16.787C48.242,8.911,40.827,0,31.713,0   S15.184,8.911,15.184,19.864c0,6.902,2.939,13.19,7.672,16.784c-0.889,0.57-2.184,1.178-3.45,1.771   c-6.202,2.91-15.574,7.309-15.574,22.006v3h55.761v-3C59.592,45.727,50.219,41.331,44.016,38.421z M10.012,57.425   c1.083-8.478,6.82-11.171,11.941-13.574c2.787-1.307,5.193-2.437,6.671-4.419l0.415-0.558l0.945-5.049l-2.006-1.017   c-4.065-2.061-6.796-7.263-6.796-12.945c0-7.645,4.724-13.864,10.529-13.864s10.529,6.22,10.529,13.864   c0,5.627-2.691,10.812-6.698,12.901l-1.971,1.028l1.018,5.426l0.524,0.61c1.5,1.746,3.749,2.801,6.354,4.022   c5.122,2.403,10.86,5.096,11.942,13.573H10.012V57.425z"
                                fill="white"
                            />
                            <!-- <a id="user" class="text-decoration-none header-content" href="#" style="color:white; padding: auto">
                        
                            </a>  -->
                    </svg>
                
                    <!-- <a id="user" class="text-decoration-none header-content" href="./account.php" style="color:white; padding: auto">
                        
                    </a> -->
                </div>
                <div class="btn m-1" style="background-color: red;">
                    <svg class="logout-btn" xmlns="http://www.w3.org/2000/svg" width="20" height="25" viewBox="0 0 24 26">
                        <path 
                            d="M15,24H0V2h15v8h-2V4H2v18h11v-6h2V24z M18.4,18.7L17,17.3l3.3-3.3H5v-2h15.3L17,8.7l1.4-1.4L24,13L18.4,18.7z"
                            fill="white"
                        ></path>
                        
                    </svg>
                </div>
            </a>

        </div>
    </div>

    <!-- header -->
    <div class="header d-flex align-items-center justify-content-center p-2 d-md-none">
        <div class="header-content d-md-none">Free shipping on orders above 200$ (US only)</div>
    </div>

    <!-- Search fields -->
    <div class="search-fields collapse my-0 mx-auto position-relative" id="search-fields">
        <input class="w-100 bg-black border-0 p-3" type="text" placeholder="Searching on my website...">
    </div>

    <!-- Cart fields -->
    <div class="cart-fields collapse my-0 mx-auto position-relative" id="cart-fields">
        <input class="w-100 bg-black border-0 p-3" type="text" placeholder="Log in my website...">
    </div>

    <div class="user-fields collapse my-0 mx-auto position-relative" id="user-fields">
        <input class="w-100 bg-black border-0 p-3" type="text" placeholder="Log in my website...">
    </div>

</div>