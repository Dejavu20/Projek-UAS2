<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Form</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i">
</head>
<body class="bg-light" style= "font-family: Nunito;">
    <div class="container d-flex justify-content-center align-items-center min-vh-100">
        <div class="row bg-white shadow rounded-4 overflow-hidden" style="max-width: 900px; width: 100%;">
            <!-- Left Section: Form -->
            <div class="col-md-6 p-5">
                <h3 class="mb-4">Login</h3>
                <form action="../proses/proses_login.php" method="POST">
                    <div class="mb-3">
                        <label for="username" class="form-label">Username</label>
                        <input type="text" class="form-control" name="username" placeholder="Username">
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" name="password" placeholder="Password">
                    </div>
                    <button type="submit" class="btn btn-primary w-100 mb-3">Sign In</button>
                </form>
            </div>

            <!-- Right Section: Welcome -->
            <div class="col-md-6 bg-primary text-white d-flex flex-column justify-content-center align-items-center">
                <h3 class="mb-3">Welcome to Login</h3>
                <p class="text-center">Don't have an account?</p>
                <a href="#" class="btn btn-outline-light">Sign Up</a>
            </div>
        </div>
    </div>
    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
