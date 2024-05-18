<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Google Font API -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet">
    <!-- Bootstrap 5 -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <!-- My css -->
    <link rel="stylesheet" href="../../css/style.css">
    <title>Products</title>

</head>

<body class="bg-light">


    <!-- header -->
    <div id="header">
        <?php include '../components/header-admin.php'; ?>
    </div>

    <!-- Navigation bar -->
    <div id="navbar">
        <?php include '../components/navbar-admin.php'; ?>
    </div>

    <!-- BODY -->
    <div class="p-5 row row-cols-lg-2 row-cols-1 row-cols-md-1 m-0">

        <!-- Categories + Sort by -->
        <div class="col col-lg-3 d-flex flex-column align-items-center mb-5" id="filter-menu">

            <div style="width: 200px;">
                <!-- Categories -->
                <div class="mb-lg-3 mb-2 ">
                    <!-- Header + Button dropdown -->
                    <div class="pb-1 border-bottom border-dark border-2 d-flex justify-content-between">
                        <p class="fw-bolder fb bg-light m-0" style="font-size: 20px">CATEGORIES</p>
                        <span class="d-lg-none">
                            <a class="btn p-0 m-0" data-bs-toggle="collapse" href="#categories-dropdown"
                                aria-expanded="false" aria-controls="categories-dropdown">
                                <img src="../../images/product_dropdown_icon.png" alt="dropdown-icon">
                            </a>
                        </span>
                    </div>

                    <!-- Content -->
                    <div class="m-0 mt-2">
                        <ul class="p-0 m-0 list-group list-group-flush d-lg-flex collapse" id="categories-dropdown">
                            <li class="form-check bg-light ps-0 pb-1" style="border-bottom: 1px dashed black">
                                <input class="form-check-input rounded-0 shadow-none d-none active" type="radio"
                                    name="flexCheck-categories" id="all" checked>
                                <label class="form-check-label fb p-2 label-categories" for="all">All</label>
                            </li>
                            <li class="form-check bg-light ps-0 pb-1" style="border-bottom: 1px dashed black">
                                <input class="form-check-input rounded-0 shadow-none d-none" type="radio"
                                    name="flexCheck-categories" id="laptops">
                                <label class="form-check-label fb p-2 label-categories" for="laptops">Laptops</label>
                            </li>
                            <li class="form-check bg-light ps-0 pb-1" style="border-bottom: 1px dashed black">
                                <input class="form-check-input rounded-0 shadow-none d-none" type="radio"
                                    name="flexCheck-categories" id="tablets">
                                <label class="form-check-label fb p-2 label-categories" for="tablets">Tablets</label>
                            </li>
                            <li class="form-check bg-light ps-0 pb-1" style="border-bottom: 1px dashed black">
                                <input class="form-check-input rounded-0 shadow-none d-none" type="radio"
                                    name="flexCheck-categories" id="accessories">
                                <label class="form-check-label fb p-2 label-categories"
                                    for="accessories">Accessories</label>
                            </li>
                            <li class="form-check bg-light ps-0 pb-1" style="border-bottom: 1px dashed black">
                                <input class="form-check-input rounded-0 shadow-none d-none" type="radio"
                                    name="flexCheck-categories" id="raspberry-pis">
                                <label class="form-check-label fb p-2 label-categories" for="raspberry-pis">Raspberry
                                    Pis</label>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Sort by -->
                <div class="mb-3">
                    <!-- Header + Button dropdown -->
                    <div class="pb-1 border-bottom border-dark border-2 d-flex justify-content-between mb-3">
                        <p class="fw-bolder fb bg-light m-0" style="font-size: 20px">SORT BY</p>
                        <span class="d-lg-none">
                            <a class="btn p-0 m-0" data-bs-toggle="collapse" href="#sortby-dropdown"
                                aria-expanded="false" aria-controls="categories-dropdown">
                                <img src="../../images/product_dropdown_icon.png" alt="dropdown-icon">
                            </a>
                        </span>
                    </div>
                    <!-- Content -->
                    <ul class="list-group list-group-flush d-lg-flex collapse" id="sortby-dropdown">
                        <li class="form-check bg-light mb-1">
                            <input class="form-check-input rounded-0 shadow-none" type="radio" name="flexCheck-payment"
                                id="default" checked>
                            <label class="form-check-label fb" for="default">Default</label>
                        </li>
                        <li class="form-check bg-light mb-1">
                            <input class="form-check-input rounded-0 shadow-none" type="radio" name="flexCheck-payment"
                                id="price-low-high">
                            <label class="form-check-label fb" for="price-low-high">Price (low-high)</label>
                        </li>
                        <li class="form-check bg-light">
                            <input class="form-check-input rounded-0 shadow-none" type="radio" name="flexCheck-payment"
                                id="price-high-low">
                            <label class="form-check-label fb" for="price-high-low">Price (high-low)</label>
                        </li>
                    </ul>

                </div>

                <!-- Applying filter btn -->
                <!-- <div class="btn btn-primary w-100 mt-4" id="filter-btn">Filter</div> -->

                <div class="row">
                    <div class="row"><button class="btn btn-primary mb-3" id="add-product-button" type="button">Add
                            Product</button></div>
                    <div class="row"><button class="btn btn-primary mb-3" id="add-product-button" type="button">Add
                            Category</button></div>
                    <div class="row"><button class="btn btn-primary mb-3" id="edit-product-button" type="button">Edit
                            Product</button></div>
                    <div class="row"><button class="btn btn-danger mb-3" id="delete-product-button" type="button">Delete
                            Product</button></div>
                </div>
            </div>
        </div>

        <!-- Products displacement -->
        <div class="col col-lg-9">

            <!-- Header -->
            <div class="mb-2 d-flex flex-row justify-content-between align-items-center px-4" style="width: 100%">
                <!-- Results -->
                <div class="fb" id="product-results"></div>
                <div class="d-flex justify-content-between">
                    <div class="btn p-0 m-0" style="width: 100px; border: 1px solid black;">
                        <select class="btn" style="color: black; width: 100%;" id="money-menu">
                            <option value="0" id="USD" selected>USD</option>
                            <option value="1" id="VND">VND</option>
                            <option value="2" id="EUR">EUR</option>
                            <option value="3" id="JPN">JPN</option>
                        </select>
                    </div>
                </div>
            </div>

            <!-- Loading Products -->
            <div id="Products-Container" class="d-flex">
                <!-- CONTENT -->
            </div>

        </div>

    </div>
    <!-- END OF BODY -->

    <!-- Footer -->
    <div id="footer">
        <?php include '../components/footer.php'; ?>
    </div>

    <!-- Bootstrap 5 -->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
        integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
        integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
        crossorigin="anonymous"></script>
    <!-- Script for fixed navbar -->
    <script src="../../scripts/fixed_navbar.js"></script>
    <!-- Handle menu bar -->
    <script src="../../scripts/handle_menu.js"></script>
    <!-- Handle sign in-up -->
    <script src="../../scripts/user_data/handle_sign.js"></script>
    <!-- Product loader -->
    <script src="../../scripts/product_loader.js"></script>
    <!-- Admin controller  -->
    <script src="../../scripts/admin_data/admin_controller.js"></script>
    <!-- Product page for admin controller -->
    <script src="../../scripts/admin_data/product_controller.js"></script>

</body>

</html>