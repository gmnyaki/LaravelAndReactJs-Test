@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">ALL THE Comments </div>
                    <div>
                        <button> Create a comment</button>
                     </div>
                <div class="panel-body">
                    @if($posts->count())

                        <div class="panel panel-default">                            
                                <div class="panel-body">  
                                    <table class="table table-stripped"> 
                                        <thead>   
                                            
                                        </thead>
                                        <tbody> 
                                            @foreach ($posts as $post)
                                                <tr>
                                                    <td>{{ $post->title }}</td>
                                                    <td> 
                                                        <well> 
                                                            {{ $post->comment}} 
                                                            {{ $post->user->name}}
                                                        </well>
                                                    </td>
                                                </tr>
                                            @endforeach
                                        </tbody>

                                    </table>
                                  </div>
                        </div>
                    @endif
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
