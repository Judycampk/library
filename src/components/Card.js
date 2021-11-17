import React from "react";

const Card = () => {

    return (
        <div class="card mb-3 mt-5 mx-auto" style={{maxWidth: '540px'}}>
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="https://cdn.builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/women-in-tech-pillar-page-instagram-accounts-to-follow_0.png" class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Mujeres en tecnologia</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
