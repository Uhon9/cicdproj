pipeline {
    agent any

    parameters {
        choice(
            name: 'DEPLOY_ENV',
            choices: ['dev', 'test', 'prod'],
            description: '选择部署环境'
        )
    }

    environment {
        IMAGE_NAME = "vite-react"
        CONTAINER_NAME = "vite-react-${params.DEPLOY_ENV}"
        PORT = "${params.DEPLOY_ENV == 'prod' ? '8080' : (params.DEPLOY_ENV == 'test' ? '8082' : '8081')}"
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://你的git仓库地址/my-vite-react-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh "docker build --build-arg BUILD_ENV=${params.DEPLOY_ENV} -t $IMAGE_NAME:${params.DEPLOY_ENV} ."
            }
        }

        stage('Deploy') {
            steps {
                sh """
                docker rm -f $CONTAINER_NAME || true
                docker run -d --name $CONTAINER_NAME -p $PORT:80 $IMAGE_NAME:${params.DEPLOY_ENV}
                """
            }
        }
    }
}
