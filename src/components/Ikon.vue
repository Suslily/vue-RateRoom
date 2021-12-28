<template>
    <div>
        <div class="rate-image">
            <div class="rate-image-inner">
            </div>
        </div>
    </div>

</template>
<style lang="scss" scoped>
.rate-image{
    width: 100px;
    height: 100px;
    background: rgba( 255, 255, 255, 0.45 );
    box-shadow: 0 8px 32px 0 rgba( 255, 255, 255, 0.37 );
    backdrop-filter: blur( 20px );
    -webkit-backdrop-filter: blur( 20px );
    border-radius: 50px;
    border: 2px solid rgba( 255, 255, 255, 0.18 );
    margin: 0 auto;
    display: flex;
    align-items: center;
    margin-bottom: 5em;
    .rate-image-inner{
        width:90px;
        height: 90px;
        background: #fff;
        border-radius: 50px;
        margin: 0 auto;
        background-image: url('~@/assets/images/ratechan.jpeg'); 
        background-position: center;
        background-size: cover;
    }
}
</style>