<?php
require_once __DIR__ . '/../config/config.php';
?>
<header>
    <nav class="navbar">
        <div class="logo"><?php echo SITE_NAME; ?></div>
        <ul class="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <div class="theme-toggle">
            <input type="checkbox" id="theme-checkbox">
            <label for="theme-checkbox" class="theme-label"></label>
        </div>
    </nav>
</header>