<?php
// Define text content for Home and About sections
$home = [
    'title' => 'Welcome to My Portfolio',
    'subtitle' => 'Full-Stack Web & Mobile App Developer'
];

$about = [
    'title' => 'About Me',
    'description' => 'I am a passionate Software Engineering student and a Full-Stack Web and Mobile App Developer. My expertise spans building robust web applications with Next.js, Express, Node.js, and TypeScript, as well as crafting cross-platform mobile apps using React Native. I leverage tools like Supabase and Git to deliver scalable, efficient solutions. With a strong foundation in both front-end and back-end development, I thrive on turning ideas into reality through clean code and innovative designs.'
];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Name - Portfolio</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <?php include 'header.php'; ?>

    <main>
        <section id="home">
            <h1><?php echo htmlspecialchars($home['title']); ?></h1>
            <p><?php echo htmlspecialchars($home['subtitle']); ?></p>
        </section>

        <section id="about">
            <h2><?php echo htmlspecialchars($about['title']); ?></h2>
            <p><?php echo htmlspecialchars($about['description']); ?></p>
        </section>
    </main>

    <?php include 'footer.php'; ?>
</body>
</html>